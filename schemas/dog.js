export default {
  name: 'dog', // Identifier
  title: 'Dogs', // Visible Title
  type: 'document',
  icon: () => '🐕',
  fields: [
    {
      name: 'name',
      title: 'Dog Name',
      type: 'string',
      description: 'Name of the dog'
    },
    {
      name: 'description',
      title: 'Dog Description',
      type: 'text',
      description: 'Description of the dog'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'Rating of the dog',
    }
  ],
  preview: {
    select: {
      name: 'name',
      rating: 'rating',
      media: 'image'
    },
    prepare: (selection) => {
      const { name, rating, media } = selection
      return {
        title: `${name} - Rating: ${rating}`,
        media: media
      }
    }
  },
  initialValue: {
    rating: 0
  }
}
