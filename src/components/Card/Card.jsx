import React from "react";
// import { AlertTriangle } from "lucide-react";
import "./Card.css";

const Card = ({ ticket }) => {

  const getIconPath = (title) => {
    switch (title) {
      // Statuses
      case "Backlog":
        return "./Backlog.svg";
      case "Canceled":
        return "./Cancelled.svg";
      case "Done":
        return "./Done.svg";
      case "In progress":
        return "./in-progress.svg";
      // Priorities
      case "No priority":
        return "./priority-0.svg";
      case "Low":
        return "./priority-1.svg";
      case "Medium":
        return "./priority-2.svg";
      case "High":
        return "./priority-3.svg";
      case "Urgent":
        return "./urgent.svg";
      case "Todo":
        return "./To-do.svg";

      // Names mapping
      case "usr-1":
        return "./profile1.svg";
      case "usr-2":
        return "./profile2.svg";
      case "usr-3":
        return "./profile3.svg";
      case "usr-4":
        return "./profile4.svg";
      case "usr-5":
        return "./profile5.svg";
      default:
        return "./boy.svg"; // Default for unknown titles
    }
  };

  const ClipText = ({ text }) => {
    const clippedText = text.length > 60 ? `${text.slice(0, 60)}...` : text;
    return <span>{clippedText}</span>;
  };

  const imgUrl = "./priority-" + ticket.priority + ".svg";

  return (
    <div className="security-card">
      <div className="card-header">
        <div>
          <h2 className="card-id">{ticket.id}</h2>
          <h1 className="card-title">
            <ClipText text={ticket.title} />
          </h1>
        </div>
        <div className="profile-image">
          <img src={getIconPath(ticket.userId)} alt="Profile" className="circleProfile" />
        </div>
      </div>
      <div className="card-tags">
        <span className="tag alert-tag">
          <img src={imgUrl} alt="priority" />
        </span>
        <span className="tag feature-tag">
          <img src="./fullcircle.svg" alt="fullcircle" height="15px" />
          {ticket.tag}
        </span>
      </div>
    </div>
  );
};

export default Card;
