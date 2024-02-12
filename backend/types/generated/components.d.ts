import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsBrand extends Schema.Component {
  collectionName: 'components_components_brands';
  info: {
    displayName: 'Brand';
  };
  attributes: {
    heading: Attribute.Text & Attribute.Required;
    logos: Attribute.Component<'shared.image-lists', true> & Attribute.Required;
  };
}

export interface ComponentsContactAddress extends Schema.Component {
  collectionName: 'components_components_contact_addresses';
  info: {
    displayName: 'Contact Address';
  };
  attributes: {
    icon: Attribute.Media & Attribute.Required;
    address: Attribute.Text & Attribute.Required;
  };
}

export interface ComponentsContactInfo extends Schema.Component {
  collectionName: 'components_components_contact_infos';
  info: {
    displayName: 'Contact Info';
    description: '';
  };
  attributes: {
    contact_address: Attribute.Component<'components.contact-address'> &
      Attribute.Required;
    contact_number: Attribute.Component<'components.contact-number'>;
    map_url: Attribute.Text;
  };
}

export interface ComponentsContactNumber extends Schema.Component {
  collectionName: 'components_components_contact_numbers';
  info: {
    displayName: 'Contact Number';
    description: '';
  };
  attributes: {
    icon: Attribute.Media & Attribute.Required;
    numbers: Attribute.Component<'shared.text-list', true> & Attribute.Required;
  };
}

export interface ComponentsFaq extends Schema.Component {
  collectionName: 'components_components_questions';
  info: {
    displayName: 'Faq';
    description: '';
  };
  attributes: {
    question: Attribute.Text & Attribute.Required;
    answer: Attribute.Text & Attribute.Required;
  };
}

export interface ComponentsFeature extends Schema.Component {
  collectionName: 'components_components_features';
  info: {
    displayName: 'Feature';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    heading: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    text_items: Attribute.Component<'shared.text-list', true> &
      Attribute.Required;
    button: Attribute.Component<'shared.button'> & Attribute.Required;
  };
}

export interface ComponentsHeader extends Schema.Component {
  collectionName: 'components_components_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    nav_links: Attribute.Component<'shared.menu', true> & Attribute.Required;
    button: Attribute.Component<'shared.button'> & Attribute.Required;
  };
}

export interface ComponentsPlan extends Schema.Component {
  collectionName: 'components_components_plans';
  info: {
    displayName: 'Plan';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    price: Attribute.Integer & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    button: Attribute.Component<'shared.button'> & Attribute.Required;
    features: Attribute.Component<'shared.text-list', true> &
      Attribute.Required;
    isPopular: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<['monthly', 'yearly']> &
      Attribute.Required &
      Attribute.DefaultTo<'monthly'>;
  };
}

export interface ComponentsReview extends Schema.Component {
  collectionName: 'components_components_reviews';
  info: {
    displayName: 'Review';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    designation: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    rating: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 5;
        },
        number
      >;
    message: Attribute.Text & Attribute.Required;
  };
}

export interface ComponentsTeamMember extends Schema.Component {
  collectionName: 'components_components_team_members';
  info: {
    displayName: 'Team Member';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    designation: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    social_links: Attribute.Component<'shared.social-link', true> &
      Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
  };
}

export interface ComponentsTeam extends Schema.Component {
  collectionName: 'components_components_teams';
  info: {
    displayName: 'Team';
  };
  attributes: {
    heading: Attribute.Text & Attribute.Required;
    team_members: Attribute.Component<'components.team-member', true> &
      Attribute.Required;
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
  };
}

export interface SectionsFaqs extends Schema.Component {
  collectionName: 'components_sections_faqs';
  info: {
    displayName: 'Faqs';
    description: '';
  };
  attributes: {
    heading: Attribute.Text & Attribute.Required;
    questions: Attribute.Component<'components.faq', true> & Attribute.Required;
  };
}

export interface SectionsFeatures extends Schema.Component {
  collectionName: 'components_sections_features';
  info: {
    displayName: 'Features';
  };
  attributes: {
    features: Attribute.Component<'components.feature', true> &
      Attribute.Required;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    heading: Attribute.Text & Attribute.Required;
    type_writer: Attribute.Component<'shared.type-writer', true> &
      Attribute.Required;
    button: Attribute.Component<'shared.button'> & Attribute.Required;
    hero_image: Attribute.Media & Attribute.Required;
    text_items: Attribute.Component<'shared.text-list', true> &
      Attribute.Required;
    image_items: Attribute.Component<'shared.image-lists', true> &
      Attribute.Required;
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

export interface SectionsSolution extends Schema.Component {
  collectionName: 'components_sections_solutions';
  info: {
    displayName: 'Solution';
    description: '';
  };
  attributes: {
    heading: Attribute.Text & Attribute.Required;
    button: Attribute.Component<'shared.button'> & Attribute.Required;
    cover_image: Attribute.Media & Attribute.Required;
  };
}

export interface SectionsUseCases extends Schema.Component {
  collectionName: 'components_sections_use_cases';
  info: {
    displayName: 'Use Cases';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    heading: Attribute.Text & Attribute.Required;
    cases: Attribute.Relation<
      'sections.use-cases',
      'oneToMany',
      'api::case.case'
    >;
  };
}

export interface SharedBreadcrumbLink extends Schema.Component {
  collectionName: 'components_shared_breadcrumb_links';
  info: {
    displayName: 'Breadcrumb Link';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String;
  };
}

export interface SharedBreadcrumb extends Schema.Component {
  collectionName: 'components_shared_breadcrumbs';
  info: {
    displayName: 'Breadcrumb';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    links: Attribute.Component<'shared.breadcrumb-link', true> &
      Attribute.Required;
  };
}

export interface SharedButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    variant: Attribute.Enumeration<['text', 'contained', 'outlined']> &
      Attribute.Required &
      Attribute.DefaultTo<'contained'>;
    label: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<['_self', '_blank']> &
      Attribute.DefaultTo<'_self'>;
  };
}

export interface SharedFooterColumn extends Schema.Component {
  collectionName: 'components_shared_footer_columns';
  info: {
    displayName: 'Footer Column';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    links: Attribute.Component<'shared.nav-link', true>;
  };
}

export interface SharedFooterSocialColumn extends Schema.Component {
  collectionName: 'components_shared_footer_social_columns';
  info: {
    displayName: 'Footer Social Column';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    social_links: Attribute.Component<'shared.social-link', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 5;
        },
        number
      >;
  };
}

export interface SharedFooter extends Schema.Component {
  collectionName: 'components_shared_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    brand_logo: Attribute.Media & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    copyright_text: Attribute.String & Attribute.Required;
    footer_columns: Attribute.Component<'shared.footer-column', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    footer_social_column: Attribute.Component<'shared.footer-social-column'> &
      Attribute.Required;
  };
}

export interface SharedImageLists extends Schema.Component {
  collectionName: 'components_shared_image_lists';
  info: {
    displayName: 'Image List';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface SharedMenu extends Schema.Component {
  collectionName: 'components_shared_menus';
  info: {
    displayName: 'Menu';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    link: Attribute.String;
    dropdown_menu: Attribute.Component<'shared.link', true>;
    two_cols: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedNavLink extends Schema.Component {
  collectionName: 'components_shared_nav_links';
  info: {
    displayName: 'Nav Link';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<['_self', '_blank']> &
      Attribute.Required &
      Attribute.DefaultTo<'_self'>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedSocialLink extends Schema.Component {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'Social Link';
    description: '';
  };
  attributes: {
    platform: Attribute.Enumeration<
      ['facebook', 'twitter', 'linkedin', 'instagram', 'github', 'youtube']
    > &
      Attribute.Required;
    icon: Attribute.Media & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<['_self', '_blank']> &
      Attribute.DefaultTo<'_blank'>;
  };
}

export interface SharedTextList extends Schema.Component {
  collectionName: 'components_shared_text_lists';
  info: {
    displayName: 'Text List';
    description: '';
  };
  attributes: {
    item: Attribute.String & Attribute.Required;
  };
}

export interface SharedTypeWriter extends Schema.Component {
  collectionName: 'components_shared_type_writers';
  info: {
    displayName: 'Type Writer';
    description: '';
  };
  attributes: {
    word: Attribute.String & Attribute.Required;
  };
}

export interface SharedVideo extends Schema.Component {
  collectionName: 'components_shared_videos';
  info: {
    displayName: 'Video';
  };
  attributes: {
    thumbnail: Attribute.Media & Attribute.Required;
    video_url: Attribute.String & Attribute.Required;
    play_icon: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.brand': ComponentsBrand;
      'components.contact-address': ComponentsContactAddress;
      'components.contact-info': ComponentsContactInfo;
      'components.contact-number': ComponentsContactNumber;
      'components.faq': ComponentsFaq;
      'components.feature': ComponentsFeature;
      'components.header': ComponentsHeader;
      'components.plan': ComponentsPlan;
      'components.review': ComponentsReview;
      'components.team-member': ComponentsTeamMember;
      'components.team': ComponentsTeam;
      'components.tool': ComponentsTool;
      'sections.faqs': SectionsFaqs;
      'sections.features': SectionsFeatures;
      'sections.hero': SectionsHero;
      'sections.reviews': SectionsReviews;
      'sections.solution': SectionsSolution;
      'sections.use-cases': SectionsUseCases;
      'shared.breadcrumb-link': SharedBreadcrumbLink;
      'shared.breadcrumb': SharedBreadcrumb;
      'shared.button': SharedButton;
      'shared.footer-column': SharedFooterColumn;
      'shared.footer-social-column': SharedFooterSocialColumn;
      'shared.footer': SharedFooter;
      'shared.image-lists': SharedImageLists;
      'shared.link': SharedLink;
      'shared.menu': SharedMenu;
      'shared.meta-social': SharedMetaSocial;
      'shared.nav-link': SharedNavLink;
      'shared.seo': SharedSeo;
      'shared.social-link': SharedSocialLink;
      'shared.text-list': SharedTextList;
      'shared.type-writer': SharedTypeWriter;
      'shared.video': SharedVideo;
    }
  }
}
