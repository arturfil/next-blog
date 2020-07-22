import Header from '../shared/Header';

const BaseLayout = (props) => {

  const {className, children} = props;
  return (
    <>
      <Header/>
      <main className={`cover ${className}`}>
        <div className="wrapper">
          {children}
        </div>
      </main>
      {props.children}
    </>  
  )
}

export default BaseLayout;