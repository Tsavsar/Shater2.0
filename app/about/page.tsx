import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/About';

const page = () => {
	
	return (
		<>
			<section className="responsive pt-16">
				<Navbar navItl="Home" navLink="/" />
				<main className={`pt-24`}>
				<About/>	
				</main>
				<Footer/>
			</section>
		</>
	);
};

export default page;
