export interface action {
  type: string;
  payload: {
    response: {
      data: any;
    };
  };
}

export interface requestAction {
  payload: {
    id: number;
  };
}
