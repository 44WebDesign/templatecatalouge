import React from 'react';

type accordionData = {
    id: number;
    accordionId: string;
    accordionClass: string;
    dataBsTarget: string;
    ariaExpanded: "true" | "false";
    ariaControls: string;
    title: string;
    collapseClass: string;
    text: string;
};

const SingleFaqAccordion = ({ accordion }: { accordion: accordionData }) => {
    const {
        accordionId,
        accordionClass,
        dataBsTarget,
        ariaExpanded,
        ariaControls,
        title,
        collapseClass,
        text
    } = accordion;

    return (
        <div className="te-accordion-list-item">
            <div id={accordionId}>
                <div className={`te-accordion-head ${accordionClass}`} role="button" data-bs-toggle="collapse" data-bs-target={dataBsTarget} aria-expanded={ariaExpanded} aria-controls={ariaControls}>
                    <h3 className="te-accordion-title">{title}</h3>
                </div>
            </div>
            <div id={ariaControls} className={`accordion-collapse collapse ${collapseClass}`} aria-labelledby={accordionId} data-bs-parent="#faq_list">
                <div className="te-accordion-body">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleFaqAccordion;
