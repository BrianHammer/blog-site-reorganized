const MAX_PARAGRAPH_LENGTH = 50;
const MAX_TITLE_LENGTH = 30;

export const formatButtonTitle = (
  text: string,
  cutoff: number = MAX_TITLE_LENGTH
) => {
  if (text.length > cutoff) {
    return text.slice(0, cutoff - 3) + "...";
  }
  return text;
};

export const formatButtonParagraph = (
  text: string,
  cutoff: number = MAX_PARAGRAPH_LENGTH
) => {
  if (text.length > cutoff) {
    return text.slice(0, cutoff - 3) + "...";
  }
  return text;
};
