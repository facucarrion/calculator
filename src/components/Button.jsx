import '../assets/styles/Button.css'

function Button ( {children} ) {
  return (
    <button className='container__button'>
      {children} 
    </button>
  )
}