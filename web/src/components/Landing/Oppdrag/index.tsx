import Link from "next/link";

const Oppdrag = () => {
    return (
        <div className="flex flex-col section-padding">
            <div className="flex md:flex-row flex-col w-full justify-start gap-8">
                <div className="self-start">
                    <video src="/static/videos/david.mov" autoPlay loop muted className="h-[600px] object-fit"></video>
                </div>
                <div className="flex flex-col justify-between w-full">
                    <div className="self-end">
                        <p className="text-4xl">
                            Har du et system du trenger hjelp med?
                            <br></br>
                            David er klar for å bistå deg. 
                        </p>
                        
                    </div>
                    <div className="flex flex-col self-start">
                        <h3>David Vimo Garner</h3>
                        <p>david@kodeworks.no</p>
                        <p>99 49 99 00</p>
                        <div>
                            <Link href="/#kontaktoss">
                                <button className="button xl:px-8 px-6 py-3 border-none" >Kontakt oss</button>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Oppdrag;