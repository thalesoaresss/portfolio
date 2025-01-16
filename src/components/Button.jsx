import PropTypes from 'prop-types'

const ButtonPrimary = ({href, target = '_self', label, icon, classes}) => {
    if(href){
      return(
        <a
          href={href}
          target={target}
          icon={icon}
          className={'btn btn-primary ' + classes}>
            {label}
            {icon ? <span className='material-symbols-rounded' aria-hidden='true'> {icon} </span> : <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"/></svg>}
        </a>
      )
    }else {
      return(
        <button className={'btn btn-primary ' + classes}>
          {label}
          {icon ? <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M480-337q-8 0-15-2.5t-13-8.5L308-492q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T365-549l75 75v-286q0-17 11.5-28.5T480-800q17 0 28.5 11.5T520-760v286l75-75q12-12 28.5-11.5T652-548q11 12 11.5 28T652-492L508-348q-6 6-13 8.5t-15 2.5ZM240-160q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360q17 0 28.5 11.5T240-320v80h480v-80q0-17 11.5-28.5T760-360q17 0 28.5 11.5T800-320v80q0 33-23.5 56.5T720-160H240Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#18181b"><path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"/></svg>}
        </button>
      )
    }
}
ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
}
const ButtonOutline = ({href, target = '_self', label, icon, classes}) => {
  if(href){
    return(
      <a
        href={href}
        target={target}
        icon={icon}
        className={'btn btn-outline ' + classes}>
          {label}
          {icon ? <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-313v-447q0-17 11.5-28.5T480-800q17 0 28.5 11.5T520-760v447l196-196q12-12 28-11.5t28 12.5q11 12 11.5 28T772-452L508-188q-6 6-13 8.5t-15 2.5q-8 0-15-2.5t-13-8.5L188-452q-11-11-11-27.5t11-28.5q12-12 28.5-12t28.5 12l195 195Z"/></svg> : undefined}

      </a>
    )
  }else {
    return(
      <button className={'btn btn-outline ' + classes}>
        {label}
        {icon ? <span className='material-symbols-rounded' aria-hidden='true'> {icon} </span> : undefined}
      </button>
    )
  }
}
ButtonOutline.propTypes = {
label: PropTypes.string.isRequired,
href: PropTypes.string,
target: PropTypes.string,
icon: PropTypes.string,
classes: PropTypes.string
}



export  {
  ButtonPrimary,
  ButtonOutline
}
