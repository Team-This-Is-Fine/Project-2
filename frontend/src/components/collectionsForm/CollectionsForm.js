import { Modal, ModalForm } from 'react-bootstrap';

export default function CollectionsForm()
{
  return (
    <Modal>
      <Modal.Header>Add Collection</Modal.Header>
      <Modal.Body>Form Properties</Modal.Body>
      <Modal.Footer>
        {/* <Button onCLick={handleSubmit}>Submit</Button> */}
      </Modal.Footer>
    </Modal>
  )
}