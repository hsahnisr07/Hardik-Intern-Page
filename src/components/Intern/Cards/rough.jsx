import React, { useState } from "react";
import "./CardsBS.css";
import CardsData from "./CardsData";
import GlassContainer_I from "../GlassContainer_I/GlassContainer_I";
import Heading_Intern from "../../Intern/Heading_Intern/Heading_Intern";
import ButtonAnimated from "../../Intern/Button_animated_I/ButtonAnimate_I";
import Loader from "../../UI/Loader/Loader";

export default function CardsBS() {
  const [expandedIndexes, setExpandedIndexes] = useState([]);
  const [category, setCategory] = useState("Intern"); // Initial category state

  const toggleExpansion = (index) => {
    if (expandedIndexes.includes(index)) {
      setExpandedIndexes(expandedIndexes.filter((item) => item !== index));
    } else {
      setExpandedIndexes([...expandedIndexes, index]);
    }
  };

  const isExpanded = (index) => {
    return expandedIndexes.includes(index);
  };

  const filterItems = (categItem) => {
    setCategory(categItem); // Update the category state
  };

  // Filter the items based on the selected category
  const filteredItems = CardsData.filter((item) => item.Category === category);

  return (
    <div className="CardsBSContainer" id="CardsBS">
      <GlassContainer_I>
        <Heading_Intern name="Intern Diaries" />

        <div className="menu-tab d-flex justify-content-around">
          <button
            className="btn btn-warning"
            onClick={() => filterItems("Intern")}
          >
            Intern
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItems("Placement")}
          >
            Placement
          </button>
        </div>

        <div className="CardsBS_card_container">
          {filteredItems.map((obj, idx) => {
            const expanded = isExpanded(idx);

            return (
              <div key={idx} className="CardsBS_card">
                <div className="CardsBS_image_Container">
                  <Loader />
                  <img src={obj.img} alt="" className="CardsBS_card_img" />
                </div>
                <div className="CardsBS_card_content">
                  <div className="CardsBS_content_text">
                    <div className="CardsBS_descp">
                      {expanded
                        ? obj.description
                        : obj.description.substring(0, 400)}
                    </div>
                  </div>
                  {obj.description.length > 220 && (
                    <ButtonAnimated
                      onClick={() => toggleExpansion(idx)}
                      text={expanded ? "Read Less" : "Read More"}
                      className="CardsBS_button"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </GlassContainer_I>
    </div>
  );
}
