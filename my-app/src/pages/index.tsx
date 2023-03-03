import Head from "next/head";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.scss";
import Header from "@/components/Header";
import Promo from "@/components/Promo";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>CharlesSBL Portfolio</title>
        <meta name="description" content="Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header></Header>

      <Promo></Promo>
      {/* <section>
        <div>
          <h3>Selected projects</h3>
          <p>
            Visit my{" "}
            <span>
              <a href="">GitHub</a>
            </span>{" "}
            to see more
          </p>
        </div>
        <div>
          <ul>
            <li>
              <div>
                <h3>RoadMapper.ts</h3>
                <p>Build a roadmap for your learning journey</p>
              </div>
              <ul>
                <li>React</li>
                <li>TypeScript</li>
                <li>React Transition Group</li>
                <li>Redux</li>
              </ul>
              <button>Check Out</button>
            </li>
            <li>
              <div>
                <h3>RoadMapper.ts</h3>
                <p>Build a roadmap for your learning journey</p>
              </div>
              <ul>
                <li>React</li>
                <li>TypeScript</li>
                <li>React Transition Group</li>
                <li>Redux</li>
              </ul>
              <button>Check Out</button>
            </li>
            <li>
              <div>
                <h3>RoadMapper.ts</h3>
                <p>Build a roadmap for your learning journey</p>
              </div>
              <ul>
                <li>React</li>
                <li>TypeScript</li>
                <li>React Transition Group</li>
                <li>Redux</li>
              </ul>
              <button>Check Out</button>
            </li>
          </ul>
        </div>
      </section> */}
      {/* <article>
        <div>App</div>
        <div>
          <div>
            <img src="" alt="none" />
          </div>
          <div>
            <div>
              <h3>More About Me</h3>
              <p>Click the button below to read more.</p>
            </div>
            <button>About Me</button>
          </div>
        </div>
      </article> */}
      {/* <footer>
        <div>
          <h3>charlesSBL.dev</h3>
          <ul>
            <li>
              <a href="./">About</a>
            </li>
            <li>
              <a href="./">GitHub</a>
            </li>
            <li>
              <a href="./">Contact</a>
            </li>
          </ul>
        </div>
      </footer> */}
    </>
  );
}
