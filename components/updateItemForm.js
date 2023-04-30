import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #5e6c84;
`;

const Input = styled.input`
  border: none;
  border-radius: 3px;
  box-shadow: inset 0 0 0 2px #dfe1e6;
  padding: 0.5rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 2px #0079bf;
  }
`;

const Option = styled.option``;

const TextArea = styled.textarea`
  border: none;
  border-radius: 3px;
  box-shadow: inset 0 0 0 2px #dfe1e6;
  padding: 0.5rem;
  font-size: 1rem;
  resize: vertical;

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 2px #0079bf;
  }
`;

const Select = styled.select`
  border: none;
  border-radius: 3px;
  box-shadow: inset 0 0 0 2px #dfe1e6;
  padding: 0.5rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 2px #0079bf;
  }
`;

const Button = styled.button`
  background-color: #0079bf;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #026aa7;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px #0079bf;
  }
`;

export default function UpdateItemForm({ item, onSubmit }) {
  const router = useRouter();

  const {
    // id,
    title,
    description,
    assignee,
    priority,
    status,
    dateDue,
    tags,
    timeEstimate,
  } = item;

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newAssignee, setNewAssignee] = useState(assignee);
  const [newPriority, setNewPriority] = useState(priority);
  const [newStatus, setNewStatus] = useState(status);
  const [newDateDue, setNewDateDue] = useState(dateDue);
  const [newTags, setNewTags] = useState(tags);
  const [newTimeEstimate, setNewTimeEstimate] = useState(timeEstimate);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const task = {
      title: newTitle,
      description: newDescription,
      assignee: newAssignee,
      priority: newPriority,
      status: newStatus,
      dateDue: newDateDue,
      tags: JSON.stringify(newTags),
      timeEstimate: parseInt(newTimeEstimate, 10),
    };

    console.log(task);
    // try {
    //   const response = await axios.post("http://localhost:8080/column", task);
    //   console.log(response);

    //   console.log("ok");
    //   router.push("/board/1/column/2");
    // } catch (e) {
    //   console.error("ERROR " + e);
    // }

    onSubmit();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Title:
        <Input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          required
        />
      </Label>
      <Label>
        Description:
        <TextArea
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          required
        />
      </Label>
      <Label>
        Assignee:
        <Input
          type="text"
          value={newAssignee}
          onChange={(e) => setNewAssignee(e.target.value)}
          required
        />
      </Label>
      <Label>
        Priority:
        <Select
          value={newPriority}
          onChange={(e) => setNewPriority(e.target.value)}
          required
        >
          <Option value="High">High</Option>
          <Option value="Medium">Medium</Option>
          <Option value="Low">Low</Option>
        </Select>
      </Label>
      <Label>
        Status:
        <Select
          value={newStatus}
          onChange={(e) => setNewStatus(e.target.value)}
          required
        >
          <Option value="To Do">To Do</Option>
          <Option value="In Progress">In Progress</Option>
          <Option value="Done">Done</Option>
        </Select>
      </Label>
      <Label>
        Due Date:
        <Input
          type="date"
          value={newDateDue}
          onChange={(e) => setNewDateDue(e.target.value)}
          required
        />
      </Label>
      <Label>
        Tags:
        <Input
          type="text"
          value={newTags}
          onChange={(e) => setNewTags(e.target.value.split(","))}
          required
        />
      </Label>
      <Label>
        Time Estimate:
        <Input
          type="number"
          value={newTimeEstimate}
          onChange={(e) => setNewTimeEstimate(e.target.value)}
          required
        />
      </Label>
      <Button type="submit">Edit Task</Button>
    </Form>
  );
}
