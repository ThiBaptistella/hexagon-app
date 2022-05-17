import React from "react";

interface Resp {
  files: [];
  name: string;
  directory: string;
  size: number;
  onOpen?: (name: string) => any;
}

function FilesViewer({ files, name, onOpen }: Resp) {
  return (
    <table className="table" key={name}>
      <tbody>
        <tr className="clickable">
          <td className="icon-row"></td>
          <td>...</td>
          <td></td>
        </tr>

        {files &&
          files.length > 0 &&
          files.map(({ name, directory, size }) => {
            return (
              <tr
                key={name}
                className="clickable"
                onClick={() => directory && onOpen(name)}
              >
                <td className="icon-row">{directory ? "Dir: " : "File: "}</td>
                <td>{name}</td>
                <td>
                  <span className="float-end">{size}</span>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default FilesViewer;