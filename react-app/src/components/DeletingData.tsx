import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import userService, { User } from "../services/user-service";
const DeletingData = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [person, setPerson] = useState<User[]>([]);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userService.getAllUser();
    request
      .then((res) => {
        setPerson(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  // same as interface
  const deleteUser = (user: User) => {
    const originalUsers = [...person];
    setPerson(person.filter((u) => u.id !== user.id)); // updated the ui first
    setPerson;

    userService.userDelete(user.id).catch((err) => {
      setError(err.message);
      setPerson(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...person];
    const newUser = { id: 0, name: "Kartik" };
    setPerson([newUser, ...person]);

    userService
      .addUser(newUser)
      .then((res) => setPerson([res.data, ...person]))
      .catch((err) => setError(err.message));
    setPerson(originalUsers);
  };

  const updateUser = (user: User) => {
    const originalUser = [...person];
    const updatedUser = { ...user, name: user.name + "Pandita" };
    setPerson(person.map((e) => (e.id === user.id ? updatedUser : e)));
    userService.userUpdate(updatedUser).catch((err) => {
      setError(err.message);
      setPerson(originalUser);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {person.map((event) => (
          <li
            key={event.id}
            className="list-group-item d-flex justify-content-between"
          >
            {event.name}
            <div>
              <button
                className="btn btn-outline-primary mx-2"
                onClick={() => updateUser(event)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(event)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DeletingData;
