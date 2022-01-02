export const heading = Tag => ({ id, children, ...props }) =>
  <Tag id={children.toLowerCase().split(' ').join('-')} {...props}>
    {children}
  </Tag>