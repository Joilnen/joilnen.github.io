var d_el = {
    nodes: [
      { data: { id: 'gmtp_init', name: 'gmtp_init' } },
      { data: { id: 'gmtp_init_hash_info', name: 'gmtp_init_hash_info' } },
      { data: { id: 'gmtp_v4_init', name: 'gmtp_v4_init' } },
      { data: { id: 'proto_register', name: 'proto_register' } },
      { data: { id: 'gmtp_v4_init_sock', name: 'gmtp_v4_init_sock' } },
      { data: { id: 'inet_add_protocol', name: 'inet_add_protocol' } },
      { data: { id: 'inet_register_protocolsw', name: 'inet_register_protocolsw' } },
      { data: { id: 'register_pernet_subsys', name: 'register_pernet_subsys' } },
      { data: { id: 'gmtp_v4_init_net', name: 'gmtp_v4_init_net' } },
      { data: { id: 'gmtp_connect', name: 'gmtp_connect' } },
      { data: { id: 'gmtp_init_sock', name: 'gmtp_init_sock' } },
      { data: { id: 'gmtp_v4_connect', name: 'gmtp_v4_connect' } },
      { data: { id: 'gmtp_set_state', name: 'gmtp_set_state' } },
      { data: { id: 'gmtp_transmit_skb', name: 'gmtp_transmit_skb' } },
      { data: { id: 'icsk_af_ops->queue=xmit', name: 'icsk_af_ops->queue=xmit' } },
      { data: { id: 'inet_bind', name: 'inet_bind' } },
      { data: { id: 'inet_gmtp_listen', name: 'inet_gmtp_listen' } },
      { data: { id: 'gmtp_v4_rcv', name: 'gmtp_v4_rcv' } },
      { data: { id: 'gmtp_v4_hnd_req', name: 'gmtp_v4_hnd_req' } },
      { data: { id: 'gmtp_rcv_state_process', name: 'gmtp_rcv_state_process' } },
      { data: { id: 'inet_csk(sk)icsk_af_conn_request', name: 'inet_csk(sk)icsk_af_conn_request' } },
      { data: { id: 'gmtp_v4_conn_request', name: 'gmtp_v4_conn_request' } },
      { data: { id: 'gmtp_v4_send_response', name: 'gmtp_v4_send_response' } },
      { data: { id: 'gmtp_make_response', name: 'gmtp_make_response' } },
      { data: { id: 'ip_build_and_send_pkt', name: 'ip_build_and_send_pkt' } },
      { data: { id: 'gmtp_ctl_send_reset', name: 'gmtp_ctl_send_reset' } },
      { data: { id: 'gmtp_cont_skb', name: 'gmtp_cont_skb' } },
      { data: { id: 'gmtp_ctl_make_reset', name: 'gmtp_ctl_make_reset' } },
      { data: { id: 'gmtp_invalid_packet', name: 'gmtp_invalid_packet' } },
      { data: { id: 'no_gmtp_packet(gmtp_v4_rcv)', name: 'no_gmtp_packet(gmtp_v4_rcv)' } },
      { data: { id: 'discard_it(gmtp_v4_rcv)', name: 'discard_it(gmtp_v4_rcv)' } },
      { data: { id: 'Diagram', name: 'Diagram' } }
    ],
    edges: [
      { data: { source: 'gmtp_init', target: 'gmtp_init_hash_info' } },
      { data: { source: 'gmtp_init_hash_info', target: 'gmtp_v4_init' } },
      { data: { source: 'proto_register', target: 'gmtp_v4_init_sock' } },
      { data: { source: 'proto_register', target: 'inet_add_protocol' } },
      { data: { source: 'inet_add_protocol', target: 'inet_register_protocolsw' } },
      { data: { source: 'register_pernet_subsys', target: 'gmtp_v4_init_net' } },
      { data: { source: 'register_pernet_subsys', target: 'gmtp_connect' } },
      { data: { source: 'gmtp_v4_rcv', target: 'gmtp_ctl_send_reset' } },
      { data: { source: 'gmtp_cont_skb', target: 'gmtp_ctl_make_reset' } },
      { data: { source: 'gmtp_ctl_make_reset', target: 'gmtp_invalid_packet' } },
      { data: { source: 'no_gmtp_packet(gmtp_v4_rcv)', target: 'discard_it(gmtp_v4_rcv)' } },
      /*** client ***/
      { data: { source: 'gmtp_v4_init_sock', target: 'gmtp_init_sock' } },
      { data: { source: 'gmtp_init_sock', target: 'gmtp_v4_connect' } },
      { data: { source: 'gmtp_v4_connect', target: 'gmtp_connect' } },
      { data: { source: 'gmtp_connect', target: 'gmtp_set_state' } },
      { data: { source: 'gmtp_transmit_skb', target: 'icsk_af_ops->queue=xmit' } },
      { data: { source: 'gmtp_transmit_skb', target: 'icsk_af_ops->queue=xmit' } },
      /*** server ***/
      { data: { source: 'gmtp_v4_init_sock', target: 'gmtp_init' } },
      { data: { source: 'gmtp_init', target: 'inet_bind' } },
      { data: { source: 'inet_gmtp_listen', target: 'inet_bind' } },
      { data: { source: 'gmtp_v4_rcv', target: 'gmtp_v4_hnd_req' } },
      { data: { source: 'gmtp_v4_hnd_req', target: 'gmtp_rcv_state_process' } },
      { data: { source: 'inet_csk(sk)icsk_af_conn_request', target: 'gmtp_v4_conn_request' } },
      { data: { source: 'gmtp_v4_send_response', target: 'gmtp_make_response' } },
      { data: { source: 'gmtp_make_response', target: 'ip_build_and_send_pkt' } }
    ]
}
