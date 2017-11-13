import React from 'react';
import ModalCommnets from '../ModalComments';
import DialogModal from '../DialogModal';

const ControlElements = ({
  mainData,
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
              <ModalCommnets taskId={mainData.id} projectId={mainData.projectId} />
            </li>
          }
          <li>
            <DialogModal
              className="delete"
              modalTitle={'Delete ' + elementType}
              modalText={'Are you sure you want to delete the ' + elementType + '?'}
              modalConfirmButtonText={'Yes, delete ' + elementType}
              modalSuccessAction={remove}
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
