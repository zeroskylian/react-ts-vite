const navs = ['Shop', 'Events', 'Contacts'];
export default function Nav() {
  return (
    <div className="nav">
      {navs.map((item) => {
        return (
          <div key={item} className="item">
            <a href="">{item}</a>
          </div>
        );
      })}
    </div>
  );
}
