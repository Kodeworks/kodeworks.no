import Link from "next/link";

const Oppdrag = () => {
    return (
        <div className="flex flex-col">
            <div className="flex md:flex-row flex-col w-full justify-start gap-8">
                {/* Text section initially placed first but will move based on order in CSS */}
                <div className="flex flex-col justify-between w-full md:order-2 order-1">
                    <div className="mb-8 md:mb-0"> {/* Added margin-bottom for mobile layout */}
                        <p className="text-4xl">
                            Har du et system du trenger hjelp med?
                            <br></br>
                            David er klar for å bistå deg. 
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <h3>David Vimo Garner</h3>
                        <p>david@kodeworks.no</p>
                        <p>99 49 99 00</p>
                        <div>
                            <Link href="/#kontaktoss">
                                <button className="button xl:px-8 px-6 py-3 border-none">Kontakt oss</button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Video section */}
                <div className="self-start md:order-1 order-2">
                    <video src="/static/videos/david.mov" autoPlay loop muted className="h-[600px] object-cover w-full md:w-auto"></video>
                </div>
            </div>
        </div>
    );
};

export default Oppdrag;