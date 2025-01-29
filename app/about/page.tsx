import About from '../components/About';
import ClientContainer from '../containers/ClientContainer';

const page = () => {
	
	return (
		<ClientContainer pageName='About - me'>
			<About/>
		</ClientContainer>
	);
};

export default page;
