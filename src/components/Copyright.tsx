const Copyright = () => {
  const data = new Date();

  const goTo = () => {
    const url = 'https://github.com/nicolasfmc';
    window.open(url, '_blank');
  };

  return (
    <div
      style={{
        position: 'absolute',
        right: 5,
        bottom: 5,
        cursor: 'pointer',
        fontFamily: 'Poppins',
      }}
      onClick={() => goTo()}
    >
      &copy; {data.getFullYear()} Nicolas Ferreira 
    </div>
  )
}

export default Copyright;