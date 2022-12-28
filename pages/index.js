import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import prerakAvatar from "../public/prerak-avatar.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="dark">
      <Head>
        <title>Prerak Jain</title>
        <meta name="description" content="Prerak Jain's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" dark:bg-gray-900 md:px-20 lg:px-40 pt-16">
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-36 h-36 relative overflow-hidden md:h-52 md:w-52">
          <Image
            src={prerakAvatar}
            layout="fill"
            objectFit="cover"
            alt="prerak-jain-avatar"
          />
        </div>
        <div className="text-center p-10 py-10">
          <h2 className="text-2xl py-2 dark:text-white font-medium md:text-3xl">
            Hey there! &#128075;
          </h2>
          <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
            I&#39;m{" "}
            <span className="text-teal-600 dark:text-teal-400">
              Prerak Jain
            </span>
            .
          </h3>
          <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
            I&#39;m a Software Engineer.
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            I work on frontend side of the web. My skills include JavaScript,
            React and their ecosystem technologies.
          </p>
          <div className="mt-6 mb-5">
            <a
              className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-10 py-3 border-none rounded-md"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              RESUME
            </a>
          </div>
          <div className="text-4xl flex justify-center gap-8 py-8 text-gray-600 dark:text-gray-400">
            <a
              href="https://github.com/prerak-jain"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://linkedin.com/in/prerakjain1007"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://twitter.com/prerakhere"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillTwitterCircle />
            </a>
            <a
              href="https://instagram.com/prerakhere"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
