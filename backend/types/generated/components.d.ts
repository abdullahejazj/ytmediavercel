import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsQuestion extends Schema.Component {
  collectionName: 'components_components_questions';
  info: {
    displayName: 'Question';
  };
  attributes: {
    question: Attribute.Text & Attribute.Required;
    answer: Attribute.Text & Attribute.Required;
  };
}

export interface ComponentsReview extends Schema.Component {
  collectionName: 'components_components_reviews';
  info: {
    displayName: 'Review';
  };
  attributes: {
    author_name: Attribute.String & Attribute.Required;
    role: Attribute.String & Attribute.Required;
    avatar: Attribute.Media & Attribute.Required;
    rating: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 5;
        },
        number
      >;
    review_text: Attribute.Text & Attribute.Required;
  };
}

export interface ComponentsTool extends Schema.Component {
  collectionName: 'components_components_tools';
  info: {
    displayName: 'Tool';
    description: '';
  };
  attributes: {
    icon: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    button: Attribute.Component<'shared.button'>;
  };
}

export interface SectionsFaqs extends Schema.Component {
  collectionName: 'components_sections_faqs';
  info: {
    displayName: 'Faqs';
  };
  attributes: {
    heading: Attribute.Text & Attribute.Required;
    questions: Attribute.Component<'components.question', true>;
  };
}

export interface SectionsFavoriteTools extends Schema.Component {
  collectionName: 'components_sections_favorite_tools';
  info: {
    displayName: 'Favorite Tools';
    description: '';
  };
  attributes: {
    heading: Attribute.Text & Attribute.Required;
    tools: Attribute.Component<'components.tool', true> & Attribute.Required;
    button: Attribute.Component<'shared.button'>;
  };
}

export interface SectionsReviews extends Schema.Component {
  collectionName: 'components_sections_reviews';
  info: {
    displayName: 'Reviews';
  };
  attributes: {
    heading: Attribute.Text & Attribute.Required;
    review: Attribute.Component<'components.review', true>;
  };
}

export interface SectionsUseCases extends Schema.Component {
  collectionName: 'components_sections_use_cases';
  info: {
    displayName: 'Use Cases';
  };
  attributes: {
    heading: Attribute.Text & Attribute.Required;
    cases: Attribute.Component<'components.tools', true> & Attribute.Required;
  };
}

export interface SharedButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    variant: Attribute.Enumeration<['text', 'contained']> &
      Attribute.Required &
      Attribute.DefaultTo<'contained'>;
    label: Attribute.String & Attribute.Required;
    href: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<['_self', '_blank']> &
      Attribute.DefaultTo<'_self'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.question': ComponentsQuestion;
      'components.review': ComponentsReview;
      'components.tool': ComponentsTool;
      'sections.faqs': SectionsFaqs;
      'sections.favorite-tools': SectionsFavoriteTools;
      'sections.reviews': SectionsReviews;
      'sections.use-cases': SectionsUseCases;
      'shared.button': SharedButton;
    }
  }
}
