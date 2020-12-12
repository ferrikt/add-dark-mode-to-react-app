import { SunImg, MoonImg, Button } from '../styled/styled';

function Content({ theme, changeTheme }) {
  return (
    <>
      {theme === 'light' ? (
        <SunImg onClick={changeTheme} />
      ) : (
        <MoonImg onClick={changeTheme} />
      )}

      <h1>Lorem ipsum dolor sit amet consectetur.</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <Button className="btn-primary">Read More</Button>
    </>
  );
}

export default Content;
