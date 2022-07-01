import PropTypes from 'prop-types';


const Section = ({ title, children }) => {
    return (
        <SectionStyled>
        <Title>{title}</Title>
        {children};

    </SectionStyled>);
};

export default Section;


Section.prototypes = {
    title: PropTypes.string.isRequired,
};