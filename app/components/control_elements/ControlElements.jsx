import React from 'react';
import moment from 'moment';
import { SortableHandle } from 'react-sortable-hoc';
import ModalCommnets from '../ModalComments';
import DialogModal from '../DialogModal';

const DragHandle = SortableHandle(() => <a className="sort" />);

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
      <div>
        { (elementType === 'task') && mainData.deadline &&
          <div className="deadline">
            {moment(mainData.deadline).format('MM/DD/YYYY h:mm')}
          </div>
        }
        <div className="control">
          <ul>
            { (elementType === 'task') &&
              <li>
                <DragHandle />
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
                <ModalCommnets mainData={mainData} />
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
