import styled from 'styled-components';

export const Category = (title) => {
  const UpperCaseTitle = title.toUpperCase();

  const category = UpperCaseTitle.includes('ENGINEER')
    ? 'Software Engineers'
    : 'etc';

  return category;
};

const JobCategoryBlock = styled.div`
  .category {
    background: var(--orange);
    border-radius: 0.8rem;
    margin-bottom: 1rem;
    font-size: 0.625rem;
    color: #fff;
    padding: 0.05rem 0.5rem 0.13rem;
    text-align: center;
  }
`;
export const JobCategory = ({ title, ...rest }) => {
  const UpperCaseTitle = title.toUpperCase();

  const category = UpperCaseTitle.includes('ENGINEER')
    ? 'Software Engineers'
    : 'etc';
  return (
    <JobCategoryBlock {...rest}>
      <span className="category">{category}</span>
    </JobCategoryBlock>
  );
};

export const JobTitle = (title) => {
  const UpperCaseTitle = title.toUpperCase();
  const companyLastIndex = UpperCaseTitle.includes(')')
    ? UpperCaseTitle.indexOf(')') >= 20
      ? UpperCaseTitle.indexOf('IS') - 1
      : UpperCaseTitle.indexOf(')') + 1
    : UpperCaseTitle.indexOf('IS') - 1;

  const textFirstIndex = UpperCaseTitle.includes('HIRING')
    ? UpperCaseTitle.indexOf('HIRING') + 7
    : UpperCaseTitle.includes('LOOKING')
    ? UpperCaseTitle.indexOf('LOOKING') + 14
    : UpperCaseTitle.indexOf('REBUILDING') + 11;

  const company = title.slice(0, companyLastIndex);
  const text = title.slice(textFirstIndex);

  const applyText =
    (text.indexOf('an') === 0 && text.slice(3)) ||
    (text.indexOf('a') === 0 && text.slice(2)) ||
    text;

  return { company, applyText };
};
