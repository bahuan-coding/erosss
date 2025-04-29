export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  
  // Get all experiences first
  const allExperiences = await $fetch('/api/experiencias');
  
  // Find the requested experience by ID
  const experience = allExperiences.find(exp => exp.id === id);
  
  // Return 404 if not found
  if (!experience) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Experience not found'
    });
  }
  
  return experience;
}); 