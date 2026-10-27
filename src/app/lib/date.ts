export function formatExperienceDate(dateString: string): string {
  if (!dateString) return "";
  if (dateString.toLowerCase() === "present") return "Present";

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;

  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}
