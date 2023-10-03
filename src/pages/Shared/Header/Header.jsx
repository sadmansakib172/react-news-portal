
import logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center py-2 mt-6'>
            <img className='mx-auto' src={logo} alt="" />
            <p>Journalism Without Fear and Flavour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;