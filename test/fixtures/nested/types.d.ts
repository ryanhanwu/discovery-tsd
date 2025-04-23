declare namespace nested {
  namespace deep {
    namespace deeper {
      type IListParams = { token?: string };
    }
  }

  namespace dot {
    namespace dotresource {
      type IListParams = { 'dotresource.token'?: string };
    }
  }

  namespace shallow {
    type ICreateParams = { name?: string };
  }
}

export default nested;
