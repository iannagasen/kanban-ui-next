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

export default function AddItemForm({ onSubmit }) {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState("High");
  const [status, setStatus] = useState("To Do");
  const [dateDue, setDateDue] = useState("");
  const [tags, setTags] = useState([]);
  const [timeEstimate, setTimeEstimate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const task = {
      id: Math.floor(Math.random() * 1000000),
      title,
      description,
      assignee,
      priority,
      status,
      dateDue,
      tags: JSON.stringify(tags),
      timeEstimate: parseInt(timeEstimate, 10),
    };

    try {
      const response = await axios.post("http://localhost:8080/column", task);
      console.log(response);

      console.log("ok");
      router.push("/board/1/column/2");
    } catch (e) {
      console.error("ERROR " + e);
    }

    onSubmit();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Title:
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Label>
      <Label>
        Description:
        <TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </Label>
      <Label>
        Assignee:
        <Input
          type="text"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          required
        />
      </Label>
      <Label>
        Priority:
        <Select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
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
          value={status}
          onChange={(e) => setStatus(e.target.value)}
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
          value={dateDue}
          onChange={(e) => setDateDue(e.target.value)}
          required
        />
      </Label>
      <Label>
        Tags:
        <Input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value.split(","))}
          required
        />
      </Label>
      <Label>
        Time Estimate:
        <Input
          type="number"
          value={timeEstimate}
          onChange={(e) => setTimeEstimate(e.target.value)}
          required
        />
      </Label>
      <Button type="submit">Create Task</Button>
    </Form>
  );
}
