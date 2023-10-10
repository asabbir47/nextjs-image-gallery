import Styles from "./media.module.css";

export default function Mobile() {
  return (
    <div className={Styles.mobile}>
      <div className="card mb-2">
        <div className="card-body">
            <h4>Khorshed Alam</h4>
            <h6>CTO</h6>
            <h6>Laravel , PHP , NextJs</h6>
        </div>
      </div>
      <div className="card mb-2">
        <div className="card-body">
            <h4>Sabbir Ahmed</h4>
            <h6>SSE</h6>
            <h6>Laravel , PHP , NextJs</h6>
        </div>
      </div>
    </div>
  );
}
