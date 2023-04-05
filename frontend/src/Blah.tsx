import React from "react";
import styles from "./Blah.module.css";
import { Link } from "react-router-dom";
import logo from "./logo.svg"

function TopBanner(props: any) {
  return (
    <>
        <div>
            <ul className="list-group list-group-flush">
                <>
                    <Link to ="/" className="list-group-item">
                        Home
                    </Link>
                </>
                <>
                    <Link to ="/podcast" className="list-group-item">
                        Podcast
                    </Link>
                </>
                <>
                    <Link to ="/movies" className="list-group-item">
                        Movies List
                    </Link>
                </>
            </ul>
        </div>

      <div className="row">
        <div className="col-2">
          <img src="./JoelHiltonHeadshot (1).jpg" alt="companyLogo" />
        </div>
        <div className="col align-self-center text-start">
          <h1 className={styles.h1}>{props.saying}</h1>
        </div>
      </div>
      <div>
        <p>This is Joel's Movie Collection. Browse using the links</p>
      </div>
    </>
  );
}

export default TopBanner;
