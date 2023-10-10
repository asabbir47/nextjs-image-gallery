import Styles from "./media.module.css";

export default function Web() {
  return (
    <div className={Styles.web}>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Desicnation</th>
            <th>Skills</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Khorshed Alam</td>
            <td>CTO</td>
            <td>Laravel , PHP , NextJs</td>
          </tr>
          <tr>
            <td>Sabbir Ahmed</td>
            <td>SSE</td>
            <td>Laravel , PHP , NextJs</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
