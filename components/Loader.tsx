import "@/styles/loader.css";

const Loader: React.FC = () => {

    return (
        <section className="loader">
            <div className="circle-container">
                <div className="animated-circle one"></div>
                <div className="animated-circle two"></div>
                <div className="animated-circle three"></div>
            </div>
        </section>
    );
};

export default Loader;