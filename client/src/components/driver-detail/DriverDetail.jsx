import { useParams } from 'react-router-dom';
const DriverDetail = () => {
	let { id } = useParams();
	return <div>DriverDetail
        <h1> ESTOY EN DRIVER DETAIIIL</h1>
    </div>;
};

export default DriverDetail;
