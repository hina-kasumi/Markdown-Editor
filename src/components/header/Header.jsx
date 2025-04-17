import "./header.scss";

function Header({ setText }) {
  function handleUpFile(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setText(event.target.result); // đây là nội dung file
    };

    reader.onerror = () => {
      console.error("Error reading file");
    };

    reader.readAsText(file); // khởi động đọc file
  }

  return (
    <header className="header">
      <h2>Markdown Edittor</h2>
      <label className="custom-file-upload">
        <input type="file" onChange={handleUpFile} />
        Upload File
      </label>
    </header>
  );
}

export default Header;
