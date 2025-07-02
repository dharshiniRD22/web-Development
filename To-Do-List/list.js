import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "./todo.css";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function Todo() {
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);
    const [editIndex, setEditIndex] = useState(null); 
    const [editValue, setEditValue] = useState(""); 

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleAddButton = () => {
        if (input.trim() !== "") {
            setData([...data, input]);
            setInput("");
        }
    };

    const onDelete = (indexToDelete) => {
        setData((prevData) => prevData.filter((_, index) => index !== indexToDelete));
    };

    const onEdit = (index, newValue = null) => {
        if (newValue === null) {
            setEditIndex(index);
            setEditValue(data[index]);
        } else {
            if (newValue !== "") {
                setData((prevData) =>
                    prevData.map((item, i) => (i === index ? newValue : item))
                );
            }
            setEditIndex(null);
            setEditValue(""); 
        }
    };

    return (
        <Container id="container">
            <h1 className="h1"><center>To-DO List</center></h1>
            <form>
                <center>
                    <Row className="mb-8">
                        <Form.Group as={Col} id="formBasicinput">
                            <Form.Control className="input" type="text" placeholder="Enter the input" value={input}  onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group as={Col} id="formBasicinput">
                            <Button className="add" variant="primary" type="button" id="button" onClick={handleAddButton}>ADD</Button>
                        </Form.Group>
                    </Row>
                </center>
                <ul className="ul">
                    {data.map((x, index) => (
                        <li key={index} className="li">
                            <Row>
                                <Col xs={6}>
                                    {editIndex === index ? 
                                    ( <Form.Control type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)}/>) 
                                            : (<span>{x}</span>
                                    )}
                                </Col>
                                <Col xs={6} className="d-flex justify-content-end">
                                    {editIndex === index ?
                                     (<Button  className="save" onClick={() => onEdit(index, editValue)}>Save</Button>) 
                                     :(
                                        <>
                                            <Button className="edit" onClick={() => onEdit(index)}><FaEdit /> Edit</Button>
                                            <Button className="delete" onClick={() => onDelete(index)} ><MdDelete /> Delete</Button>
                                        </>
                                    )}
                                </Col>
                            </Row>
                        </li>
                    ))}
                </ul>
            </form>
        </Container>
    );
}
export default Todo;
