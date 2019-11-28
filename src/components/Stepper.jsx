import React, {useState} from 'react';
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import {StepContent} from "@material-ui/core";

/**
 * Кастомный степпер. Рисуем по props.children
 * Всем children'aм даем stepperLabel для отображения лейбла в самом степпере.
 * Если не хотим отображать в степпере страницу, к примеру SuccessPage - не задаем ему label.
 * */
export default ({step, children}) => {

    const getStepContent = () => children[step];

    return (
        <>
            <Stepper activeStep={step} alternativeLabel>
                {
                    React.Children.map(Array.isArray(children) ? children : [children], (child) => child.props.stepperLabel && (
                            <Step key={child.props.stepperLabel}>
                                <StepLabel>{child.props.stepperLabel}</StepLabel>
                            </Step>
                        )
                    )
                }
            </Stepper>
            {
                getStepContent()
            }
        </>
    );
};
