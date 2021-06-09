const Navbar = () => {
    return (
        <nav>
             <div className="logo">CodingNepal</div>
             <label htmlFor="btn" className="icon">
                Menu
            </label>
            <input type="checkbox" id="btn"></input>
            <ul>
            <li><a href="#">Products</a></li>
            <li><a href="#">Technology</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Media</a></li>
            <li>
          <label htmlFor="btn-1" className="show">Investors</label>
          <a href="#">Investors</a>
          <input type="checkbox" id="btn-1"></input>
          <ul>
            <li><a href="#">Pages 1</a></li>
            <li><a href="#">Page 2</a></li>
            <li><a href="#">Page 3</a></li>
          </ul>
           </li>
            </ul>
        </nav>
    );
}

export default Navbar; 