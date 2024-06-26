import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost, editPost } from '../redux/actions';
import { Card, CardContent, Typography, Button, Grid, Paper } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PostList = () => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(null);
  const [editedContent, setEditedContent] = useState('');

  const handleDelete = (postId) => {
    dispatch(deletePost(postId));
  };

  const handleEdit = (postId, currentContent) => {
    setEditMode(postId);
    setEditedContent(currentContent);
  };

  const handleSaveEdit = (postId) => {
    dispatch(editPost(postId, { ...posts.find(post => post.id === postId), content: editedContent }));
    setEditMode(null);
    setEditedContent('');
  };

  const handleCancelEdit = () => {
    setEditMode(null);
    setEditedContent('');
  };

  return (
    <Paper style={{ padding: '20px' }}>
      {posts.map((post) => (
        <Card key={post.id} style={{ marginBottom: '10px' }}>
          <CardContent>
            <Typography variant="h5">{post.title}</Typography>
            {editMode === post.id ? (
              <ReactQuill value={editedContent} onChange={setEditedContent} />
            ) : (
              <Typography variant="body1" style={{ marginTop: '10px' }}>
                {post.content}
              </Typography>
            )}
            <Grid container justifyContent="flex-end" style={{ marginTop: '10px' }}>
              {editMode === post.id ? (
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => handleSaveEdit(post.id)}
                        style={{ marginRight: '10px' }}
                      >
                        Save
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        variant="outlined"
                        color="default"
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              ) : (
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => handleEdit(post.id, post.content)}
                        style={{ marginRight: '10px' }}
                      >
                        Edit
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => handleDelete(post.id)}
                      >
                        Delete
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Paper>
  );
};

export default PostList;