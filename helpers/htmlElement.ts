const stripHTMLTags = (htmlString: string): string => {
  const regex = /(<([^>]+)>)/gi;
  return htmlString.replace(regex, "");
};

export const generatePreview = (content: string, wordCount: number): string => {
  const plainTextContent = stripHTMLTags(content);
  const words = plainTextContent.split(" ");
  const preview = words.slice(0, wordCount).join(" ");
  return words.length > wordCount ? preview + "..." : preview;
};
