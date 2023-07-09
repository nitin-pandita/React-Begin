import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import axios from "axios";
interface User {
  id: number;
  name: string;
}
const Cancel = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [person, setPerson] = useState<User[]>([]);

  useEffect(() => {
    const controller = new AbortController(); // default property of browser

    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setPerson(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    setLoading(false);

    return () => controller.abort();
  }, []);
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul>
        {person.map((event) => (
          <li key={event.id}>{event.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Cancel;
