import Header from '../shared/Header';
import { ToastContainer } from 'react-toastify';

const BaseLayout = (props) => {

  const {className, navClass="with-bg", children, user, loading} = props;
  return (
    <div className="">
      <Header user={user} loading={loading} className={navClass} />
      <main className={`cover ${className}`} >
        <div className="wrapper" style={{marginTop: "60px"}}>
          {children}
        </div>
      </main>
      <ToastContainer/>
    </div>  
  )
}

export default BaseLayout;