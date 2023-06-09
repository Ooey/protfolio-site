import { techStack, techStack2 } from "../techstack";
import TechStackComp from "../TechStackComp";
import TechStackItem from "../TechStackItem";

export default function page() {
    return (
        <main className="flex w-10/12 min-h-screen flex-col items-center justify-center py-6 m-auto">
            <div className="w-10/12 py-10 bg-gray-900 rounded-md border-2 border-cyan-500">
                <div className="mx-72">
                    <h2 className="text-2xl mb-10">About Myself</h2>

                    <p className="text-lg">
                        Welcome to my portfolio website! My name is Agamemnon
                        Serafeim, I am from Greece and I am a university student
                        currently pursuing a degree in Information and
                        Electronic Engineering at the International Hellenic
                        University. With a profound passion for programming and
                        web development, my primary focus lies mostly in
                        front-end development.
                    </p>

                    <h2 className="text-2xl my-10">My Experience</h2>

                    <p className="text-lg">
                        I have been programming since 2018. Mostly learning on
                        my own and making projects from my ideas. In the last
                        year, I managed to open my own freelancing business and
                        have landed the following jobs so far:{" "}
                        <ul className="list-disc ml-5">
                            <li className="my-3">
                                A job in a small local web development business,
                                doing basic wordpress plugin development and
                                creating a fully-functional headless CMS
                                marketplace for the web and mobile (using React
                                Native).
                            </li>
                            <li className="my-3">
                                A remote job for a French startup company,
                                creating static websites with HTML, CSS and
                                Javascript/Jquery for multiple clients who were
                                mostly in the Blockchain and Investment
                                businesses.
                            </li>
                        </ul>
                    </p>
                    <h2 className="text-2xl mt-12 text-center">
                        My Tech Stack
                    </h2>
                    <p className="text-sm text-center">(hover)</p>
                    <div className="flex w-full justify-between">
                        <TechStackComp />
                    </div>
                </div>
            </div>
        </main>
    );
}
