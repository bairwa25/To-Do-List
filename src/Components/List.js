import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './List.css'
import Listitem from './Listitem'

function List() {
    const [lists, setLists] = useState([
        "Learn HTML",
        "Learn CSS", 
        "Learn JavaScript",
        "Learn React",
        "Learn Python",
    ]);
    const [newLists, setNewLists] = useState("")

    const Listitems = lists.map((list) =>
    <Listitem key={list} item={list} />
    );

    function addToLists(list) {
        const currentLists = [...list]
        currentLists.push(list)
        setLists(currentLists)
      }

  return (
    <div class='list-container'>
        <h2 class='list-header'>Create To Do List</h2>
        <Row>
            <Col xs={12} md={9}>
            <input placeholder="Type new list..." class="list-inputt" value={newLists} onChange={e => setNewLists(e.target.value)} />
            </Col>
            <Col xs={12} md={3}>
                <Button size="lg" block className="submit-button" onClick={() => {addToLists(newLists); setNewLists("")}}>Add List</Button>
            </Col>
        </Row>
        {Listitems}
    </div>
  );
}

export default List;
