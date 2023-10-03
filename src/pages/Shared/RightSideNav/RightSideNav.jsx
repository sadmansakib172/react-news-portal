import { FaGoogle } from 'react-icons/fa';

const RightSideNav = () => {
    return (
        <div className='p-4'>
            <h2 className="text-3xl font-semibold">Login With</h2>
            <button className="btn btn-outline w-full">
              <FaGoogle></FaGoogle>
                Button
            </button>
        </div>
    );
};

export default RightSideNav;