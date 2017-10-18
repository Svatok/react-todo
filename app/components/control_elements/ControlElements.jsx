import React from 'react';

const ControlElements = ({
  elementType,
  editingId,
  elementId,
  startEditing,
  remove,
  cancelEditing,
  save
}) => (
  <div>
    { (editingId !== elementId) &&
      <div className="control">
        <ul>
          { (elementType === 'task') &&
            <li>
              <a className="sort" />
            </li>
          }
          <li>
            <a
              onClick={startEditing}
              className="edit"
            />
          </li>
          { (elementType === 'task') &&
            <li>
              <a className="comment" />
            </li>
          }
          <li>
            <a
              onClick={remove}
              className="delete"
            />
          </li>
        </ul>
      </div>
    }
    { (editingId === elementId) &&
      <div className="control-editing">
        <ul>
          <li>
            <a
              onClick={save}
              className="save"
            />
          </li>
          <li>
            <a
              onClick={cancelEditing}
              className="cancel"
            />
          </li>
        </ul>
      </div>
    }
  </div>
);

export default ControlElements;
