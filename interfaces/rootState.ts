export interface rootState {
  allExhibitions: {
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    data: Array<allExhibitionsData>;
  };
  exhibition: {
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    data: allExhibitionsData;
  };
}

export interface allExhibitionsData {
  aic_end_at: string;
  aic_start_at: string;
  alt_image_ids: Array<any>;
  api_link: string;
  api_model: string;
  artist_ids: Array<any>;
  artwork_ids: Array<any>;
  artwork_titles: Array<any>;
  date_display: string;
  department_display: string;
  description: string;
  document_ids: Array<any>;
  gallery_id: Number;
  gallery_title: string;
  id: Number;
  image_id: Number;
  image_url: string;
  is_featured: boolean;
  last_updated: string;
  last_updated_source: string;
  short_description: string;
  site_ids: Array<any>;
  status: string;
  suggest_autocomplete_all: Array<suggest_autocomplete_all>;
  timestamp: string;
  title: string;
  type: string;
  web_url: string;
}

interface suggest_autocomplete_all {
  contexts: {
    groupings: Array<string>;
  };
}

export interface galleryProps {
  image_url: string;
  title: string;
  aic_start_at: string;
  aic_end_at: string;
  id: Number;
}
